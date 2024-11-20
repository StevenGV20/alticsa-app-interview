import React, { useState } from "react";

function CotizacionForm() {

    const [dataForm, setDataForm] = useState({
        name:"",
        dni:"",
        celular:"",
        correo:"",
        direccion:"",
        rubro:"",
        mensaje:"",
    });

  const onSubmit = () => {
    console.log(dataForm);
    
  };
  return (
    <form className="bg-gray-100 px-12 py-8">
      <div className=" grid grid-cols-2 gap-2">
        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="font-bold">
            Nombres y Apellidos
          </label>
          <input
            className="p-2 border border-gray-500"
            placeholder="Ingresa tu nombre y apellidos"
            name="nombres"
            value={dataForm.name}
            onChange={(e)=> setDataForm({...dataForm,name:e.target.value})}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="font-bold">
            DNI o RUC
          </label>
          <input
            className="p-2 border border-gray-500"
            placeholder="Ingrese DNI o RUC"
            name="dni"
            value={dataForm.dni}
            onChange={(e)=> setDataForm({...dataForm,dni:e.target.value})}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="font-bold">
            Celular
          </label>
          <input
            className="p-2 border border-gray-500"
            placeholder="Ingresa tu celular"
            value={dataForm.celular}
            type="number"
            onChange={(e)=> setDataForm({...dataForm,celular:e.target.value})}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="font-bold">
            Correo
          </label>
          <input
            className="p-2 border border-gray-500"
            placeholder="Ingresa tu correo"
            value={dataForm.correo}
            type="email"
            onChange={(e)=> setDataForm({...dataForm,correo:e.target.value})}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="font-bold">
            Direccion
          </label>
          <input
            className="p-2 border border-gray-500"
            placeholder="Ingresa tu direccion"
            value={dataForm.direccion}
            onChange={(e)=> setDataForm({...dataForm,direccion:e.target.value})}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="font-bold">
            Rubro
          </label>
          <input
            className="p-2 border border-gray-500"
            placeholder="Ingresa tu rubro"
            value={dataForm.rubro}
            onChange={(e)=> setDataForm({...dataForm,rubro:e.target.value})}
          />
        </div>

        <div className="flex flex-col space-y-2 col-span-2">
          <label htmlFor="" className="font-bold">
            Mensaje
          </label>
          <textarea
            className="p-2 border border-gray-500"
            placeholder="Escribe un mensaje"
            value={dataForm.mensaje}
            onChange={(e)=> setDataForm({...dataForm,mensaje:e.target.value})}
          />
        </div>
      </div>
      <div className="flex justify-between w-full mt-4">
        <div className="h-16 w-64 bg-slate-200">captch</div>
        <button className="bg-black px-16 py-0 text-white rounded-lg" type="button" onClick={()=>onSubmit()}>
          Cotizar
        </button>
      </div>
    </form>
  );
}

export default CotizacionForm;
