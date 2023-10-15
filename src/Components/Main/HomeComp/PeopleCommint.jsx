import clases from "./PeopleCommint.module.css";
import CommintCard from "../../UI/CommintCard/CommintCard";
import commint1 from "../../../assets/commint1.png";
import commint2 from "../../../assets/commint2.png";
import commint3 from "../../../assets/commint3.png";
import commint4 from "../../../assets/commint4.png";

const COMMiNTS = [
  {
    id: "c1",
    img: commint1,
    person: "Brandon Ming",
    rating: 4.5,
    com: "Lorem ipsum dolor sit amet contetur adsing elit. Asmenda sed optio offiis ullam! Nisi hic voluptas ut prentium modi.",
  },
  {
    id: "c2",
    img: commint2,
    person: "Tamika Jackson",
    rating: 5,
    com: "Lorem ipsum dolor sit amet contetur adsing elit. Asmenda sed optio offiis ullam! Nisi hic voluptas ut prentium modi.",
  },
  {
    id: "c3",
    img: commint3,
    person: "Maria Sanchez",
    rating: 4.5,
    com: "Lorem ipsum dolor sit amet contetur adsing elit. Asmenda sed optio offiis ullam! Nisi hic voluptas ut prentium modi.",
  },
  {
    id: "c4",
    img: commint4,
    person: "Antony Clifton",
    rating: 5,
    com: "Lorem ipsum dolor sit amet contetur adsing elit. Asmenda sed optio offiis ullam! Nisi hic voluptas ut prentium modi.",
  },
];

const PeopleCommint = () => {
  return (
    <div className={clases["people-com"]}>
      {COMMiNTS.map((com) => (
        <CommintCard
          key={com.id}
          img={com.img}
          person={com.person}
          rating={com.rating}
          com={com.com}
        />
      ))}
    </div>
  );
};

export default PeopleCommint;
