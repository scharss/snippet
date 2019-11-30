{
    let empleado = {
        salarioBase: 500000,
        vrlHoraExtra: 10000,
        numHorasextra: 5,
        sueldo: function() {
            return this.salarioBase + (this.vrlHoraExtra * this.numHorasextra);
        }


    };
    console.log(empleado.sueldo());

}