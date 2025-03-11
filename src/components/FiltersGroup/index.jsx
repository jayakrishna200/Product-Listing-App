import './index.css'

const filtersList=["IDEAL FOR","OCCASION","WORK","FABRIC","SEGMENT","SUITABLE FOR","RAW MATERIALS","PATTERN"]

const FiltersGroup = () => {

    return(
        <div>
            <div className="customizable-cont" >
                <input type="checkbox" id="customizable" className="customizable-input"/>
                <label for="customizable" className="customizable-label" >CUSTOMIZABLE</label>
            </div>
            {filtersList.map((filter)=>{
                return(
                    <div className="filter-cont" >
                       <select className='filter-select-group' >
                        <option>{filter}</option>
                            <option className='filter-option' >
                                <input type="checkbox" id={filter} className="filter-input"/>
                                <label for={filter} className="filter-label-group" >Men</label>
                            </option>
                            <option className='filter-option' >
                                <input type="checkbox" id={filter} className="filter-input"/>
                                <label for={filter} className="filter-label-group" >Women</label>
                            </option>
                            <option className='filter-option' >
                                <input type="checkbox" id={filter} className="filter-input"/>
                                <label for={filter} className="filter-label-group" >Baby&Kids</label>
                            </option>
                        
                       </select>
                    </div>
                )
            })}
        </div>
    )
}

export default FiltersGroup