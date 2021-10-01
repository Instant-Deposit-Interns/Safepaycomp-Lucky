
function PaymentComp(){

  const Num = () =>(
    <input className="form-control" type="number" id="text" placeholder="Enter Phone Number" aria-label="default input example"/>
  );
// showing the number field

const [shownumField, setNumField] = React.useState(false);
const onClick = () => {
  if (!shownumField) {
    setNumField(true);
  }else{
    setNumField(false);
  };
};

// state for the options
const [options, setOptions]= React.useState([]);

  
function chars(e){
  let input = e.target.value
  if (input.length == 7 ){
    // console.log(input)
  }

};

// getting api from json file
function getJson(){
  fetch('./data.json',
  
    {headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
    }
  ).then(
    function(response){
      // console.log(response.json())
      setOptions(response.json()) 
      // console.log(options);
    });
}
getJson()
React.useEffect(()=>{
  getJson()
}, [])
  
    return (
      <div className="col-md-6 col-sm-12 col-xs-12" style={{width:"100%"}}>
      <div className="money-send">
           <div className="calculator-inner">
               <div className="single-cal">
                   <div className="inner-form">
                       <form action="#">
                           <label>Select your payment</label>

                           <select className="form-select form-input" style={{color:"black"}}>
                              {options.map((option)=> <option>{option.title}</option>)}
                             </select>

                           {/* <select className="form-select form-input" style={{color:"black"}}>
                               <option selected>School Fees(Private Schools)</option>
                               <option value="1">Plateau Health Subscription</option>
                               <option value="2">ESUT Payments</option>
                               <option value="3"> ESCET Payments</option>
                               <option value="4"> IMT Payments</option>
                               <option value="5"> GOUNI Payments</option>
                               <option value="6"> SafePay Topup</option>
                             </select> */}
                           
                       </form>
                   </div>
                   <div className="inner-form">
                       <form action="#">
                           <label style={{margin_top: "60px"}}>Enter Reference Number</label>
                           <input style={{color: "black"}} type="number" className="form-input" id="regNo" placeholder="Enter Ref Number" onChange={chars} />
  
                       </form>
                   </div>
                   <div className="inner-form-text">
                       
                           {/* <span> You are about to pay <strong>N3,500 </strong>for EZICHI OGO being BECE fees Exchange rate</span> */}
  
                      
                   </div>
                   <div className="form-check">
                       <input type="checkbox" className="form-check-input" id="dropdownCheck" onClick={onClick}/>
                       <label className="form-check-label" htmlFor="dropdownCheck">
                         Send me the payment reference
                       </label>
                     </div>
  
                   {shownumField ? <Num /> : null}
  
                   <button className="cale-btn">Continue</button>
                   <div className="terms-text">
                       <p>By clicking continue, I am agree with <a href="#">Terms & Policy</a></p>
                   </div>
               </div>
           </div>
      </div>
      
   </div>
      );
    };
  
  ReactDOM.render(
    <PaymentComp/>, document.querySelector('#payment')
  );