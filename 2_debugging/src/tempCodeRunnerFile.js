
  for (let i = 0; i < results.length; i++)
  {
    const obj = results[i]
    const species = obj.species_guess
    const loc = obj.location

    console.log(`"${species} observed at coordinates (${loc})"`)
  }
}