"use client";

import "./gente.css"
const stylePasive = "text-white cursor-pointer rounded-4xl font-medium py-2 px-4"
const items = [
  { text: "Jorge Federico Giozzi", style: stylePasive },
  { text: "Luca Gambini", style: stylePasive },
  { text: "Gonzalo Martín Dettler", style: stylePasive },
  { text: "Adriel Benjamín Acosta", style: stylePasive }
];
function Gente(){
    return (
        <div className='text-white h-full flex py-10 mx-4'>
                    <section>
                        <ul id='gente-container'>
                            {items.map((item,index) => (
                                <li key={index} className={item.style}>
                                    {item.text}
                                </li>
                            ) )}
                        </ul>
                    </section>
                </div>
    )
}
export default Gente