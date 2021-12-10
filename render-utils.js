export function renderGoblin(goblinData) {
    const goblinContainer = document.createElement('div');
    const pFace = document.createElement('p');
    const pName = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinContainer.classList.add('goblin');

    pName.textContent = goblinData.name;
    hpEl.textContent = goblinData.hp;
    
    pFace.textContent = goblinData.hp > 0 ? '😈' : '🔥';

    if (goblinData.hp < 0) {
        goblinContainer.classList.add('dead');
    }

    goblinContainer.append(pName, pFace, hpEl);

    return goblinContainer;
}