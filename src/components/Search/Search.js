import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
// import "antd/dist/antd.css";
// import { Select, Form } from "antd";
// const { Option } = Select;

function Search() {
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
    setValue(e.target.value);
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
  // const handleSearch = (value) => {
  //   if (value) {
  //     handleSelect(value);
  //   } else {
  //     handleSelect([]);
  //   }
  // };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  // const options = data.map((suggestion) => {
  //   const {
  //     place_id,
  //     structured_formatting: { main_text, secondary_text },
  //   } = suggestion;
  //    return <Option key={place_id} >{main_text}</Option>});

  return (
    <div ref={ref}>
      <input
        type='text'
        disabled={!ready}
        onChange={handleChange}
        value={value || ""}
        placeholder='Новая точка маршрута'
        style={{ width: "100%", marginBottom: "30px" }}
      />
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
}
export default Search;


  /* <Select
          showSearch
          value={value || ""}
          placeholder='Новая точка маршрута'
          style={{ width: "100%", marginBottom: "30px" }}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          onSearch={handleSearch}
          onChange={handleChange}
          notFoundContent={null}
          className='input-style'
          disabled={!ready}
        >
          {status === "OK" && options}
        </Select> */

