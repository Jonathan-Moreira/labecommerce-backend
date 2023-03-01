const papel = process.argv[2]

if (!papel){
    console.log("faltou o argumento de busca")
}else {
    const result = countries.filter(country => country.name.includes(papel))
    console.log(papel)
}