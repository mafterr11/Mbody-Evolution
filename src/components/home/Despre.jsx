import React from "react";
import { Dumbbell } from "lucide-react";
import Image from "next/image";
const Despre = () => {
  return (
    <div className="container py-[8rem]">
      <h2 className="flex items-center justify-center gap-x-3 md:justify-start">
        DESPRE MINE <Dumbbell size={45} className="text-accent" />{" "}
      </h2>
      {/* Separator */}
      <span className="mb-20 mt-2 block border-b-4 border-accent xl:w-[25rem]" />
      {/* Text */}
      <div className="flex flex-col-reverse items-start gap-x-24 gap-y-10 md:flex-row">
        <div className="flex max-w-3xl flex-col gap-y-8 xl:gap-y-14">
          <p>
            <span className="text-accent">&#9679;</span> Numele meu este Mihaela
            Bordeianu, sunt personal trainer, tehnician nutriționist și sportivă
            de performanță.
          </p>
          <p>
            <span className="text-accent">&#9679;</span> Încă din copilărie, am
            fost atrasă de sport și competiție, investind multă pasiune în
            fiecare activitate sportivă în care m-am implicat, însa m-am și
            confruntat cu multe dintre dificultățile obișnuite pentru un
            începător, cum ar fi lipsa încrederii în sine și nemulțumirea față
            de propria formă fizică, iar cu un astfel de mindset și fără
            cunoștințe solide, progresul a întârziat să apară.
          </p>
          <p>
            {" "}
            <span className="text-accent">&#9679;</span> Pe măsură ce m-am
            aprofundat în acest domeniu,{" "}
            <span className="bg-accent px-1 font-semibold text-white">
              am realizat că nutriția joacă un rol esențial
            </span>{" "}
            și am continuat să mă specializez și în această direcție. Cred că
            nimeni nu poate urma o dietă strictă la nesfârșit, de aceea îi învăț
            pe cei cu care lucrez să fie flexibili, să integreze și alimentele
            mai puțin sănătoase în alimentație și, în același timp, să-și atingă
            și să-și mențină obiectivele pe termen lung.
          </p>
          <p>
            <span className="text-accent">&#9679;</span> Acesta este un{" "}
            <span className="bg-accent px-1 font-semibold text-white">
              stil de viață
            </span>
            , nu un compromis pe termen scurt, motiv pentru care este esențial
            să găsim abordarea optimă, atât în alimentație, cât și în
            antrenament, pentru obiectivele și stilul tău de viață.
          </p>
        </div>
        <div className="">
          <Image
            src="/about.jpg"
            width={800}
            height={800}
            alt="about section"
          />
        </div>
      </div>
    </div>
  );
};

export default Despre;
