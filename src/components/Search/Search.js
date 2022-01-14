import React, { useCallback, useMemo, useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import "./Search.css";
import "antd/dist/antd.css";
import { Select } from "antd";

function Search() {
  const [place, setPlace] = useState();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleChange = (e) => {
    // setValue(e.target.value);
    console.log(e);
    if (e) setPlace(e);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          console.log("📍 Coordinates: ", { lat, lng });
        })
        .catch((error) => {
          console.log("😱 Error: ", error);
        });
    };

  // const handleSelect = useCallback(
  //   ({ description }) =>
  //     () => {
  //       console.log(description);
  //       setValue(description, false);
  //       clearSuggestions();
  //       getGeocode({ address: description })
  //         .then((results) => getLatLng(results[0]))
  //         .then(({ lat, lng }) => {
  //           console.log("📍 Coordinates: ", { lat, lng });
  //         })
  //         .catch((error) => {
  //           console.log("😱 Error: ", error);
  //         });
  //     },
  //   [setValue, clearSuggestions]
  // );

  const handleSearch = (selectedValue) => {
    setValue(selectedValue);
  };

  // const suggestions = useMemo(
  //   () =>
  //     data.map((suggestion) => {
  //       const {
  //         place_id,
  //         structured_formatting: { main_text, secondary_text },
  //       } = suggestion;

  //       return (
  //         // <li
  //         //   className='search__suggestion'
  //         //   key={place_id}
  //         //   onClick={handleSelect(suggestion)}
  //         // >
  //         //   <strong>{main_text}</strong> <small>{secondary_text}</small>
  //         // </li>
  //         <Option onClick={handleSelect(suggestion)} key={place_id}>
  //           <strong>{main_text}</strong> <small>{secondary_text}</small>
  //         </Option>
  //       );
  //     }),
  //   [data, handleSelect]
  // );

  // console.log(suggestions);

  return (
    <div ref={ref}>
      <Select
        showSearch
        placeholder='Новая точка маршрута'
        value={place}
        style={{ width: "100%", marginBottom: "30px" }}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={handleSearch}
        onChange={handleChange}
        // onSelect={handleChange}
        // onMouseDown={handleChange}
        notFoundContent={
          status === "ZERO_RESULTS" ? <h3>Ничего не найдено</h3> : null
        }
        className='input-style'
        disabled={!ready}
      >
        {/* {options}  */}
        {/* {status === "OK" && suggestions.length && { suggestions }} */}
        {status === "OK" &&
          data.map((suggestion) => {
            const {
              place_id,
              structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
              <Select.Option
                key={place_id}
                value={`${main_text}, ${secondary_text}`}
                label={main_text}
                title={main_text}
              >
                <b>{main_text}</b> <small>{secondary_text}</small>
              </Select.Option>
            );
          })}

        {/* {status === "ZERO_RESULTS" && <h2>Ничего не найдено</h2>} */}
      </Select>
      {/* <input
        type='text'
        value={value || ""}
        placeholder='Новая точка маршрута'
        onChange={handleChange}
        style={{ width: "100%", marginBottom: "10px", color: "#000000" }}
        disabled={!ready}
      />
      {status === "OK" && suggestions.length && <ul className="search__suggestions">{suggestions}</ul>}

      {status === "ZERO_RESULTS" && <h2>Ничего не найдено</h2>} */}
    </div>
  );
}
export default Search;
