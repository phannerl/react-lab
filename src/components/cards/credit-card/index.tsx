import visa from "../../../assets/visa-svgrepo-com.svg";
import master from "../../../assets/mastercard-old-1-svgrepo-com.svg";
import "./index.css";
import { Dispatch, SetStateAction, useState } from "react";
import FormCredit from "../../forms/credit-card";

interface CardInfoProps {
  title?: string;
  seri?: string;
  uname?: string;
  vdate?: string;
  showForm?: boolean;
  onChangeShowForm?: Dispatch<SetStateAction<boolean>>;
}

const TitleCard = ({ title }: CardInfoProps) => {
  return (
    <div className="card__title">
      <div className="card__title--credit">Credit</div>
      {title == "Visa" ? (
        <img className="card__title--visa" src={visa} />
      ) : (
        <img className="card__title--visa" src={master} />
      )}
    </div>
  );
};

const SeriCard = ({ seri }: CardInfoProps) => {
  seri = seri
    ?.split("")
    .map((item: string, index) => {
      if (index < 10) return "*";
      return item;
    })
    .join("");

  const processedSeri = seri
    ?.split(/(.{4})/)
    .filter((x) => x.length == 4)
    .join(" ");
  return <div className="card__seri">{processedSeri}</div>;
};

const NameHolder = ({ uname }: CardInfoProps) => {
  return (
    <div className="card__text">
      <div className="card__text--title">Name</div>
      <div className="card__text--value">
        {uname?.replace(/^./, uname && uname[0].toUpperCase())}
      </div>
    </div>
  );
};

const ValidDateHolder = ({ vdate }: CardInfoProps) => {
  const validDate = vdate?.split(/(\w{2})$/) ?? [];
  return (
    <div className="card__text">
      <div className="card__text--title">Valid Date</div>
      <div className="card__text--value">
        {validDate[0]}/{validDate[1]}
      </div>
    </div>
  );
};

const CardCredit = () => {
  const [title, changeTitle] = useState("Visa");
  const [name, setName] = useState("");
  const [seri, setSeri] = useState("");
  const [vdate, setVDate] = useState("");
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className={"card__bg"}>
        <TitleCard title={title} />
        <SeriCard seri={seri} />
        <div className="card__info">
          <NameHolder uname={name} />
          <ValidDateHolder vdate={vdate} />
          <button
            className="card__info--btn rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setShowForm(!showForm)}
          >
            Edit
          </button>
        </div>
      </div>

      {showForm ? (
        <FormCredit
          onChangeName={setName}
          onChangeSeri={setSeri}
          onChangeTitle={changeTitle}
          onChangeVDate={setVDate}
          onChangeShowForm={setShowForm}
          showForm={showForm}
          uname={name}
          seri={seri}
        />
      ) : null}
    </>
  );
};
export default CardCredit;
