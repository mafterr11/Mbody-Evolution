"use client";
import { useState } from "react";
import { Button } from "../ui/button";

const Calculator = () => {
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
    <div className="container min-h-screen px-8 py-12 xl:py-32 text-white">
      {/* <h1 className="mb-8 text-3xl font-bold text-accent">
        Calculator caloric
      </h1> */}
      {/* Step 1 */}
      <div className="rounded-lg bg-white/10 p-6 shadow-md filter backdrop-blur-xl">
        <h2 className="mb-4 text-2xl font-semibold text-accent">
          Pasul 1: Informații de bază
        </h2>
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-md border-[1px] border-white/20 bg-black/10 px-6 py-8 text-center filter backdrop-blur-lg">
            <label className="mb-2 block">Sex:</label>
            <select
              name="sex"
              value={form.sex}
              onChange={handleChange}
              className="h-[3rem] w-[10rem] rounded border border-gray-300 p-2 text-black placeholder:text-black"
            >
              <option value="female">Feminin</option>
              <option value="male">Masculin</option>
            </select>
          </div>
          <div className="rounded-md border-[1px] border-white/20 bg-black/10 px-6 py-8 text-center filter backdrop-blur-lg">
            <label className="mb-2 block">Vârstă:</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-black placeholder:text-black"
              placeholder="Introduceți vârsta"
            />
          </div>
          <div className="rounded-md border-[1px] border-white/20 bg-black/10 px-6 py-8 text-center filter backdrop-blur-lg">
            <label className="mb-2 block">Înălțime (cm):</label>
            <input
              type="number"
              name="height"
              value={form.height}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-black placeholder:text-black"
              placeholder="cm"
            />
          </div>
          <div className="rounded-md border-[1px] border-white/20 bg-black/10 px-6 py-8 text-center filter backdrop-blur-lg">
            <label className="mb-2 block">Greutate (kg):</label>
            <input
              type="number"
              name="weight"
              value={form.weight}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-black placeholder:text-black"
              placeholder="kg"
            />
          </div>
        </div>
      </div>
      {/* Step 2 */}
      <div className="mt-6 rounded-lg bg-white/10 p-6 shadow-md filter backdrop-blur-xl">
        <h2 className="mb-4 text-2xl font-semibold text-accent">
          Pasul 2: Nivelul de activitate
        </h2>
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-md border-[1px] border-white/20 bg-black/10 px-6 py-8 text-center filter backdrop-blur-lg">
            <label className="mb-2 block font-semibold">
              <input
                type="radio"
                name="activityLevel"
                value="sedentary"
                checked={form.activityLevel === "sedentary"}
                onChange={handleChange}
                className="mr-2"
              />
              Sedentar
            </label>
            <p className="text-[15px]">
              Petreceți majoritatea zilei stând, cu puțină sau fără exercițiu
              fizic
            </p>
          </div>
          <div className="rounded-md border-[1px] border-white/20 bg-black/10 px-6 py-8 text-center filter backdrop-blur-lg">
            <label className="mb-2 block font-semibold">
              <input
                type="radio"
                name="activityLevel"
                value="active"
                checked={form.activityLevel === "active"}
                onChange={handleChange}
                className="mr-2"
              />
              Activ
            </label>
            <p className="text-[15px]">
              Antrenamente ușoare de 3 ori/săptămână
            </p>
          </div>
          <div className="rounded-md border-[1px] border-white/20 bg-black/10 px-6 py-8 text-center filter backdrop-blur-lg">
            <label className="mb-2 block font-semibold">
              <input
                type="radio"
                name="activityLevel"
                value="veryActive"
                checked={form.activityLevel === "veryActive"}
                onChange={handleChange}
                className="mr-2"
              />
              Foarte activ
            </label>
            <p className="text-[15px]">
              Antrenamente de atlet de 5-7 ori/săptămână
            </p>
          </div>
          <div className="rounded-md border-[1px] border-white/20 bg-black/10 px-6 py-8 text-center filter backdrop-blur-lg">
            <label className="mb-2 block font-semibold">
              <input
                type="radio"
                name="activityLevel"
                value="extraActive"
                checked={form.activityLevel === "extraActive"}
                onChange={handleChange}
                className="mr-2"
              />
              Extra activ
            </label>
            <p className="text-[15px]">
              Exerciții fizice foarte intense zilnic sau muncă fizică
            </p>
          </div>
        </div>
      </div>
      {/* Step 3 */}
      <div className="mt-6 rounded-lg bg-white/10 p-6 shadow-md filter backdrop-blur-xl">
        <h2 className="mb-4 text-2xl font-semibold text-accent">
          Pasul 3: Selectați obiectivul
        </h2>
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <label className="block rounded-md border-[1px] border-white/20 bg-black/10 px-4 py-6 text-center font-medium uppercase filter backdrop-blur-lg">
            <input
              type="radio"
              name="goal"
              value="maintain"
              checked={form.goal === "maintain"}
              onChange={handleChange}
              className="mr-2"
            />
            Menținere greutate
          </label>
          <label className="block rounded-md border-[1px] border-white/20 bg-black/10 px-4 py-6 text-center font-medium uppercase filter backdrop-blur-lg">
            <input
              type="radio"
              name="goal"
              value="weightLoss"
              checked={form.goal === "weightLoss"}
              onChange={handleChange}
              className="mr-2"
            />
            Pierdere în greutate
          </label>
          <label className="block rounded-md border-[1px] border-white/20 bg-black/10 px-4 py-6 text-center font-medium uppercase filter backdrop-blur-lg">
            <input
              type="radio"
              name="goal"
              value="weightGain"
              checked={form.goal === "weightGain"}
              onChange={handleChange}
              className="mr-2"
            />
            Creștere în greutate
          </label>
        </div>
      </div>
      {/* Submit */}
      <Button onClick={calculateResults} className="mt-6 font-bold">
        Calculează acum
      </Button>

      <div className="backdrop-filter-xl mt-6 w-fit rounded-lg bg-white/5 p-6 shadow-md filter">
        <h2 className="mb-4 text-2xl font-semibold">Rezultatele tale:</h2>
        <p>Basal Metabolic Rate (BMR): {results.bmr} kcal/zi</p>
        <p>Target caloric zilnic: {results.calorieIntake} kcal/zi</p>
        <p>Macronutrienți:</p>
        <p>Grăsimi: {results.fats} g</p>
        <p>Proteine: {results.protein} g</p>
        <p>Carbohidrați: {results.carbs} g</p>
      </div>
    </div>
  );
};

export default Calculator;
