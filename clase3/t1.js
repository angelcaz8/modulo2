const transactions = [
    {id: 14356, client: "Ana Carrasco", monto: 96789, date: "2025-03-25", status: "completado"},
    {id: 79879, client: "Saul Hernandez", monto: 362456, date: "2025-03-24", status: "pendiente"},
    {id: 23462, client: "Ivan Fougerat", monto: 100, date: "2025-03-23", status: "rechazado"},
    {id: 52346, client: "Maria Galaz", monto: 798789, date: "2025-03-25", status: "completado"}
]
const firstTransaction = transactions.find(t => t.status === "completado")
console.log("primera transaction del mes completada: ", firstTransaction);
 const clienst = transactions.map(t => t.client);
 const existIvan = clienst.includes("Ivan Fougerat");
 console.log ("Ivan Fougerat tine transacciones este mes?",existIvan):

 const total  transaction.map(t)


 const rechazado = transactions.some(t => t.status === "rechazado");
 console.log("Hay trnasacciones rechazadas?",rechazado);

 const transactionsMayor = transactions.filter(t => )