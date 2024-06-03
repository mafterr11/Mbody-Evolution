"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useTranslations } from "next-intl";

const Calculator = () => {
  const t = useTranslations("Calculator");
  const [form, setForm] = useState({
    sex: "",
    age: "",
    height: "",
    weight: "",
    activityLevel: "sedentary",
    goal: "weightLoss",
  });

  const [results, setResults] = useState({
    bmr: 0,
    calorieIntake: 0,
    fats: 0,
    protein: 0,
    carbs: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const calculateResults = () => {
    const { age, height, weight, sex, activityLevel, goal } = form;
    const ageNum = parseFloat(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    // BMR Calculation (Mifflin-St Jeor Equation)
    let bmr;
    if (sex === "male") {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
    } else {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
    }

    // Activity Multipliers
    const activityMultipliers = {
      sedentary: 1.2,
      active: 1.375,
      veryActive: 1.55,
      extraActive: 1.725,
    };

    const activityMultiplier = activityMultipliers[activityLevel];
    let calorieIntake = bmr * activityMultiplier;

    // Adjust Calorie Intake for Goal
    if (goal === "weightLoss") {
      calorieIntake -= 500;
    } else if (goal === "weightGain") {
      calorieIntake += 500;
    }

    // Macronutrient Distribution (20% Fats, 35% Protein, 45% Carbs)
    const fats = (0.2 * calorieIntake) / 9;
    const protein = (0.35 * calorieIntake) / 4;
    const carbs = (0.45 * calorieIntake) / 4;

    setResults({
      bmr: bmr.toFixed(2),
      calorieIntake: calorieIntake.toFixed(2),
      fats: fats.toFixed(2),
      protein: protein.toFixed(2),
      carbs: carbs.toFixed(2),
    });
  };

  return (
    <div className="container min-h-screen px-8 py-12 text-white xl:py-32">
      {/* <h1 className="mb-8 text-3xl font-bold text-accent">
        Calculator caloric
      </h1> */}
      {/* Step 1 */}
      <div className="rounded-lg bg-white/10 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-accent">
          {t("p1.title")}
        </h2>
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-md border-[1px] border-white/20 bg-black/10 px-6 py-8 text-center">
            <label className="mb-2 block">Sex:</label>
            <select
              name="sex"
              value={form.sex}
              onChange={handleChange}
              className="h-[3rem] w-[10rem] rounded p-2 text-black placeholder:text-black"
            >
              <option value="female">{t("p1.sex.female")}</option>
              <option value="male">{t("p1.sex.male")}</option>
            </select>
          </div>
          <div className="rounded-md border-[1px] border-white/20 bg-black/10 px-6 py-8 text-center">
            <label className="mb-2 block">{t("p1.age")}:</label>
            <Input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              className="w-full rounded p-2 text-black placeholder:text-black"
              placeholder="Introduceți vârsta"
            />
          </div>
          <div className="rounded-md border-[1px] border-white/20 bg-black/10 px-6 py-8 text-center">
            <label className="mb-2 block">{t("p1.height")} (cm):</label>
            <Input
              type="number"
              name="height"
              value={form.height}
              onChange={handleChange}
              className="w-full rounded p-2 text-black placeholder:text-black"
              placeholder="cm"
            />
          </div>
          <div className="rounded-md border-[1px] border-white/20 bg-black/10 px-6 py-8 text-center">
            <label className="mb-2 block">{t("p1.weight")} (kg):</label>
            <Input
              type="number"
              name="weight"
              value={form.weight}
              onChange={handleChange}
              className="w-full rounded p-2 text-black placeholder:text-black"
              placeholder="kg"
            />
          </div>
        </div>
      </div>
      {/* Step 2 */}
      <div className="mt-6 rounded-lg bg-white/10 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-accent">
          {t("p2.title")}
        </h2>
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-4">
          {/* First */}
          <label
            className={` ${form.activityLevel === "sedentary" && "scale-[0.97] bg-white/5"} block rounded-md border-[1px] border-white/20 bg-black/10 px-6 py-8 text-center font-semibold transition-all duration-300 ease-in-out hover:cursor-pointer`}
          >
            <input
              type="radio"
              name="activityLevel"
              value="sedentary"
              checked={form.activityLevel === "sedentary"}
              onChange={handleChange}
              className="mr-2 h-3 w-3 border-spacing-2 appearance-none rounded-full border-2 border-gray-300 ring-accent ring-offset-1 checked:border-accent checked:bg-accent checked:ring-[1px]"
            />
            {t("p2.sedentary.title")}
            <p className="mt-2 text-[15px]">{t("p2.sedentary.text")}</p>
          </label>
          {/* Second */}
          <label
            className={` ${form.activityLevel === "active" && "scale-[0.97] bg-white/5"} block rounded-md border-[1px] border-white/20 bg-black/10 px-6 py-8 text-center font-semibold transition-all duration-300 ease-in-out hover:cursor-pointer`}
          >
            <input
              type="radio"
              name="activityLevel"
              value="active"
              checked={form.activityLevel === "active"}
              onChange={handleChange}
              className="mr-2 h-3 w-3 border-spacing-2 appearance-none rounded-full border-2 border-gray-300 ring-accent ring-offset-1 checked:border-accent checked:bg-accent checked:ring-[1px]"
            />
            {t("p2.active.title")}
            <p className="mt-2 text-[15px]">{t("p2.active.text")}</p>
          </label>
          {/* Third */}
          <label
            className={` ${form.activityLevel === "veryActive" && "scale-[0.97] bg-white/5"} block rounded-md border-[1px] border-white/20 bg-black/10 px-6 py-8 text-center font-semibold transition-all duration-300 ease-in-out hover:cursor-pointer`}
          >
            <input
              type="radio"
              name="activityLevel"
              value="veryActive"
              checked={form.activityLevel === "veryActive"}
              onChange={handleChange}
              className="mr-2 h-3 w-3 border-spacing-2 appearance-none rounded-full border-2 border-gray-300 ring-accent ring-offset-1 checked:border-accent checked:bg-accent checked:ring-[1px]"
            />
            {t("p2.veryActive.title")}
            <p className="mt-2 text-[15px]">{t("p2.veryActive.text")}</p>
          </label>
          <label
            className={` ${form.activityLevel === "extraActive" && "scale-[0.97] bg-white/5"} block rounded-md border-[1px] border-white/20 bg-black/10 px-6 py-8 text-center font-semibold transition-all duration-300 ease-in-out hover:cursor-pointer`}
          >
            <input
              type="radio"
              name="activityLevel"
              value="extraActive"
              checked={form.activityLevel === "extraActive"}
              onChange={handleChange}
              className="mr-2 h-3 w-3 border-spacing-2 appearance-none rounded-full border-2 border-gray-300 ring-accent ring-offset-1 checked:border-accent checked:bg-accent checked:ring-[1px]"
            />
            {t("p2.extraActive.title")}
            <p className="mt-2 text-[15px]">{t("p2.extraActive.text")}</p>
          </label>
        </div>
      </div>
      {/* Step 3 */}
      <div className="mt-6 rounded-lg bg-white/10 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-accent">
          {t("p3.title")}
        </h2>
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <label
            className={` ${form.goal === "maintain" && "scale-[0.97] bg-white/5"} block rounded-md border-[1px] border-white/20 bg-black/10 px-4 py-6 text-center font-medium uppercase transition-all duration-300 ease-in-out hover:cursor-pointer`}
          >
            <input
              type="radio"
              name="goal"
              value="maintain"
              checked={form.goal === "maintain"}
              onChange={handleChange}
              className="mr-2 h-3 w-3 border-spacing-2 appearance-none rounded-full border-2 border-gray-300 ring-accent ring-offset-1 checked:border-accent checked:bg-accent checked:ring-[1px]"
            />
            {t("p3.1")}
          </label>
          <label
            className={` ${form.goal === "weightLoss" && "scale-[0.97] bg-white/5"} block rounded-md border-[1px] border-white/20 bg-black/10 px-4 py-6 text-center font-medium uppercase transition-all duration-300 ease-in-out hover:cursor-pointer`}
          >
            <input
              type="radio"
              name="goal"
              value="weightLoss"
              checked={form.goal === "weightLoss"}
              onChange={handleChange}
              className="mr-2 h-3 w-3 border-spacing-2 appearance-none rounded-full border-2 border-gray-300 ring-accent ring-offset-1 checked:border-accent checked:bg-accent checked:ring-[1px]"
            />
            {t("p3.2")}
          </label>
          <label
            className={` ${form.goal === "weightGain" && "scale-[0.97] bg-white/5"} block rounded-md border-[1px] border-white/20 bg-black/10 px-4 py-6 text-center font-medium uppercase transition-all duration-300 ease-in-out hover:cursor-pointer`}
          >
            <input
              type="radio"
              name="goal"
              value="weightGain"
              checked={form.goal === "weightGain"}
              onChange={handleChange}
              className="mr-2 h-3 w-3 border-spacing-2 appearance-none rounded-full border-2 border-gray-300 ring-accent ring-offset-1 checked:border-accent checked:bg-accent checked:ring-[1px]"
            />
            {t("p3.3")}
          </label>
        </div>
      </div>
      <div className="flex flex-col justify-between md:flex-row">
        {/* Results */}
        <div className="backdrop--xl mt-6 w-fit rounded-lg bg-white/5 p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold">{t("results.title")}</h2>
          <p className="mb-2">
            Basal Metabolic Rate (BMR):{" "}
            <span className="font-bold text-accent">
              {" "}
              {results.bmr} {t("results.kcal")}
            </span>
          </p>
          <p>
            {t("results.target")}{" "}
            <span className="font-bold text-accent">
              {" "}
              {results.calorieIntake} {t("results.kcal")}
            </span>
          </p>
          <p className="my-2 font-bold">{t("results.macro.title")}</p>
          <p>
          {t("results.macro.fat")}{" "}
            <span className="font-bold text-accent"> {results.fats} g</span>
          </p>
          <p>
          {t("results.macro.protein")}:{" "}
            <span className="font-bold text-accent"> {results.protein} g</span>
          </p>
          <p>
          {t("results.macro.carbs")}:{" "}
            <span className="font-bold text-accent"> {results.carbs} g</span>
          </p>
        </div>
        {/* Submit */}
        <Button
          onClick={calculateResults}
          className="mt-6 font-bold transition-all duration-300 ease-in-out active:scale-[0.96]"
        >
          {t("button")}
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
