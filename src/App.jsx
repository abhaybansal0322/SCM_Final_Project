import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { AnimatedTooltip } from "./components/animated-tooltip";
import abhayImage from "./assets/abhay2.jpg";
import tamannaImage from "./assets/tamanna.jpg";
import anushkaImage from "./assets/anushka.jpg";
import akshitaImage from "./assets/akshita.jpg";

function App() {

  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const people = [
    {
      id: 1,
      name: "Abhay Bansal",
      designation: "102217246",
      image:abhayImage,
        
    },
    {
      id: 2,
      name: "Tamanna",
      designation: "102203413",
      image:tamannaImage,
        
    },
    {
      id: 3,
      name: "Anushka",
      designation: "102203819",
      image:anushkaImage,
        
    },
    {
      id: 4,
      name: "Akshita",
      designation: "102203189",
      image:akshitaImage,
        
    },
    
  ];

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5
                                    hover:bg-blue-700 active:scale-95 active:rotate-180 transition-transform transform duration-300"
                            onClick={swap}
                            title="Swap currencies"
                        >
                            ↔ Swap
                        </button>
                    </div>


                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
            <div className="mt-12 flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={people} />
            </div>
        </div>
    </div>
);
}

export default App