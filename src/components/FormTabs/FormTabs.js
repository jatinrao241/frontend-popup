import React , {useState} from "react";
import "./FormTabs.css";


const FormTabs = (props) => {

    const tabs = ["Date & Time" , "Account Details" , "Basket Details"];

    const [currentTab, setCurrentTab] = useState(1);
    const [complete, setComplete] = useState(false);

    return (
      <>
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-1 col-0">

                </div>
                <div className="col-lg-8 col-md-10 col-12">
                    <div className="tab-list-name-style d-flex justify-content-between">
                        {tabs?.map((tab, i)=>(
                            <div key={i} className={`tab-item ${currentTab === i + 1 && "active"} ${i + 1 < currentTab && "complete"}`}>
                                <div className="tab">{i + 1 < currentTab || complete ? i + 1 : <span class="circle-for-tab"></span>}</div>
                                <p className="steps-name-color">{tab}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-2 col-md-1 col-0">

                </div>
                
            </div>
        </div>
        
        
      </>
    );
}

export default FormTabs;