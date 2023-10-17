class kendaraan {
   constructor(model,merk,harga){
        this.model = model;
        this.merk = merk;
        this.harga = harga;
    }


//membuat method maju
maju(){
    return 'mesin ${this.merk} ${this.model} berjalan maju';
}

//membuat method berhenti
berhenti() {
    return 'mesin ${this.merk} ${this.model} berhenti';
}

}

let mobil = new kendaraan("supra","toyota",200000);
let motor = new kendaraan("CBR","Honda",30000);

console.log(mobil.maju());
console.log(motor.berhenti());

//class siswa {
//    constructor(nama,kelamin,kelas){
//        this.nama = nama;
//        this.kelamin = kelamin;
//        this.kelas = kelas;
//    }


//maju() {
//    return 'mesin ${this.kelas} ${this.nama} berjalan maju';
// }


//berhenti() {
//    return 'mesin ${this.kelas} ${this.nama} berhenti';
// }

//}


//let siswa1 = new siswa("nopal","laki",11);
//let siswa2 = new siswa("yatul","perempuan",11);

//console.log(siswa1.maju());
//console.log(siswa2.berhenti());