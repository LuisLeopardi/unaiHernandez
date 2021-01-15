const Select = ({data, setSelectValue, selectValue}) => {

    const handleChange = ({ target: { value } }) => {
        setSelectValue(value)
    }

    return (
        <select onChange={handleChange} value={selectValue}>
            {
                data.map(e=> <option value={e} key={e}> {e} </option> )
            }
        </select>
    )
}


export default Select;