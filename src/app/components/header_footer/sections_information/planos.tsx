"use client";

import "./planos.css"
import Download from "../../svgs/dowloand";
import DriveButton from "../../svgs/drive_a";

function Planos(){
    return (
        <div className='text-white h-full flex-col flex justify-center lg:justify-center py-10 w-full items-center'>
            <div className="w-3/4 bg-[#f0f0f0] rounded-lg">
                <div className="p-4 justify-around flex text-black bg-gray-400 rounded-lg">
                    <DriveButton></DriveButton>
                    <Download fileName="archivo.pdf" 
                fileUrl="/descargas/Unidad_4_Actividad_2.pdf"></Download>
                </div>
                <p></p>
            </div>
                <img src="https://images.arq.com.mx/documentos/fototeca/1953839664-Casa2niv.jpg" alt="" className="w-3/4" />

        </div>
    )
}
export default Planos