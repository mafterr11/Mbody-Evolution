import React from "react";

const Programe = () => {
  return (
    <div className="container mb-40 grid gap-x-40 max-md:gap-y-20 md:grid-cols-2">
      <div>
        <h2 className="mb-2 max-md:text-center">ONLINE COACHING</h2>
        {/* Separator */}
        <span className="mb-20 mt-2 block border-b-4 border-accent xl:w-[26rem] max-md:w-[90%] max-md:mx-auto" />
        <div className="flex flex-col gap-y-4">
          <p>
            Planul alimentar, de antrenament și suplimente vor fi concepute
            special pentru obiectivul, nevoile și particularitățile tale. De
            asemenea, voi fi prezentă cu răspunsuri, motivație și ajustări (când
            este cazul) pe perioada întregului proces, astfel încât să nu te
            plafonezi, totul să fie clar și să obținem cele mai bune rezultate
            în cel mai scurt timp.
          </p>

          <p>Ce include: </p>
          <ul className="flex flex-col gap-y-4">
            <li>
              <span className="text-accent">&#9679;</span> plan alimentar
              personalizat
            </li>
            <li>
              <span className="text-accent">&#9679;</span> plan de antrenament
              personalizat, în funcție de locul unde vrei să te antrenezi
              (sala/acasă), obiectiv și disponibilitate
            </li>
            <li>
              <span className="text-accent">&#9679;</span> exercițiile vin
              însoțite de materiale video, unde vei vedea cum să le execuți
              corect
            </li>
            <li>
              <span className="text-accent">&#9679;</span> vei învață diverse
              metode de creștere a intensității: progresive overload, drop set,
              rest pause, s.a
            </li>
            <li>
              <span className="text-accent">&#9679;</span> vom comunica pe
              WhatsApp pentru eventuale întrebări pe care le aveti
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="mb-2 max-md:text-center">1-1 COACHING</h2>
            {/* Separator */}
      <span className="mb-20 mt-2 block border-b-4 border-accent xl:w-[19rem] max-md:w-[80%] max-md:mx-auto" />
        <div className="flex flex-col gap-y-4">
          <p>
            Acesta este un serviciu pentru persoanele care-și doresc să lucreze
            direct sub supravegherea mea, la sala 18Gym, Pipera.
          </p>
          <p>Ce include: </p>
          <ul className="flex flex-col gap-y-4">
            <li>
              <span className="text-accent">&#9679;</span> plan de antrenament
              personalizat, în funcție de obiectiv și disponibilitate{" "}
            </li>
            <li>
              <span className="text-accent">&#9679;</span> plan alimentar
              personalizat
            </li>

            <li>
              <span className="text-accent">&#9679;</span> suport permanent pe
              toată durata colaborării
            </li>
            <li>
              <span className="text-accent">&#9679;</span> corectarea posturii
              pe parcursul sesiunilor, pentru a asigura o eficienta maxima al
              antrenamentelor
            </li>
            <li>
              <span className="text-accent">&#9679;</span> vei învață diverse
              metode de creștere a intensității: progresive overload, drop set,
              rest pause, s.a
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Programe;
