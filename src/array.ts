const estudante = [
    {nome: `José`, ra: `fg45`, disciplina: `POO`, anoNascimento: 1984},
    {nome: `Maria`, ra: `fg40`, disciplina: `POO`, anoNascimento: 1999},
    {nome: `Francisca`, ra: `fg38`, disciplina: `POO`, anoNascimento: 2007},
    {nome: `Raimundo`, ra: `fg35`, disciplina: `BACKEND`, anoNascimento: 2007},

];

estudante.forEach(estudante => {
    console.log(estudante);
});

estudante.forEach(function(estudante){
    console.log(estudante)
})