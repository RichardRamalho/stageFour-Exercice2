


let notes = alert("Agora vamos mostrar o resultado final das provas!")

const students = [
  { name: "Marcos", nota1: 4, nota2: 5 },
  { name: "Luiz", nota1: 8, nota2: 5 },
  { name: "Layane", nota1: 9, nota2: 6 },
  { name: "Thais", nota1: 10, nota2: 8 },
  { name: "Sandro", nota1: 6, nota2: 8 }
]

const calcMedia = (nota1,nota2) => {
  return ((nota1 + nota2) / 2).toFixed(2)
}

for (let media of students) {

  if(calcMedia(media.nota1, media.nota2) >= 7) {

    alert(`A média do(a) aluno(a) ${media.name} é: ${calcMedia(media.nota1,media.nota2)}
    Parabéns, ${media.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${media.name} é: ${calcMedia(media.nota1,media.nota2)}
    Não foi dessa vez, ${media.name}! Tente novamente!`)
    }
}











