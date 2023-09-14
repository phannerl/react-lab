import { ChangeEvent, Dispatch, SetStateAction } from "react";
import "./index.css";
interface creditInputInterface {
  onChangeName: Dispatch<SetStateAction<string>>;
  onChangeSeri: Dispatch<SetStateAction<string>>;
  onChangeTitle: Dispatch<SetStateAction<string>>;
  onChangeVDate: Dispatch<SetStateAction<string>>;
  onChangeShowForm: Dispatch<SetStateAction<boolean>>;
  showForm: boolean;
  uname: string;
  seri: string;
}
const FormCredit = ({
  onChangeName,
  onChangeSeri,
  onChangeTitle,
  onChangeVDate,
  onChangeShowForm,
  showForm,
  uname,
  seri,
}: creditInputInterface) => {
  const onChangeSeriInput = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value;
    onChangeSeri(currentValue);
    currentValue[0] == "1" ? onChangeTitle("Master") : onChangeTitle("Visa");
    if (currentValue.length == 16) {
      const firstNumberDate = Math.floor(Math.random() * 1);
      const secondNumberDate =
        Math.floor(Math.random() * 1) >= 1
          ? Math.floor(Math.random() * 2)
          : Math.floor(Math.random() * 8 + 1);
      const yearChar = Math.floor(Math.random() * 9);
      onChangeVDate(
        "" + firstNumberDate + secondNumberDate + yearChar + yearChar
      );
    }
  };

  return (
    <form onSubmit={() => onChangeShowForm(!showForm)}>
      <div className="credit-card__bg">
        <div className="credit-card__rows">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 w-40">
            Name
          </h1>
          <input
            type="text"
            autoComplete="text"
            value={uname}
            required
            onChange={(e) => onChangeName(e.currentTarget.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 placeholder:text-gray-400 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div className="credit-card__rows">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 w-40">
            Seri
          </h1>
          <input
            type="password"
            autoComplete="password"
            value={seri}
            required
            maxLength={16}
            onChange={onChangeSeriInput}
            className="block py-1.5 px-0 w-full text-sm border-gray-900 text-gray-900 border-0 border-b-2 placeholder:text-gray-400 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer sm:text-sm sm:leading-6"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default FormCredit;
