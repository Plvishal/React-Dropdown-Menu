import style from '../Component/DropDown.module.css';

import { useEffect, useState } from 'react';

import { IoMdArrowDropdown } from 'react-icons/io';

function DropDown() {
  const data = ['Yes', 'Probably not'];

  const [value, setvalue] = useState(false);
  const [mouseOverButton, setmouseOverButton] = useState(false);

  const handleOutside = () => {
    document.addEventListener('click', (e) => {
      setvalue(false);
    });
  };

  useEffect(() => {
    handleOutside();
  });

  useEffect(() => {
    if (mouseOverButton) {
      setvalue(true);
    }
  }, [mouseOverButton]);

  return (
    <div className={style.container}>
      <div className={style.center}>
        <p className={style.text}>Should you use a dropdown? </p>
        <div className={style.dropdown}>
          <button
            className={style.select}
            onMouseOver={() => setmouseOverButton(!mouseOverButton)}
          >
            <span>Select</span>
            <span>
              <IoMdArrowDropdown color={'black'} fontSize={50} />
            </span>
          </button>
          {value && (
            <div id="btn-data" className={style.optionSelect}>
              {data.map((name, i) => (
                <div
                  className={style.optionChoices}
                  onClick={() => setvalue(false)}
                  key={i}
                >
                  <span>{name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DropDown;
