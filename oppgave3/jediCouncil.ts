class JediCouncil {
  constructor(private jedi: any[]) {
    this.jedi = jedi;
  }

  addJedi(jedi: any) {
    this.jedi.push(jedi);
  }

  removeJedi(jedi: any) {
    const index = this.jedi.indexOf(jedi);
    this.jedi.splice(index, 1);
  }
}

const jediCouncil = new JediCouncil(['Luke Skywalker', 'Obi-Wan Kenobi']);
console.log(jediCouncil);
jediCouncil.addJedi('Yoda');
console.log(jediCouncil);
jediCouncil.removeJedi('Yoda');
console.log(jediCouncil);
