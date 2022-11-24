
export const RenderCharacters = (getIDs: number[]) => {
    
    let totalRender = [];

    for(let i = 0; i < getIDs.length; i++)
    {
        totalRender.push(`<div id="BB${getIDs[i]}" class="section_card"></div>`);
    }

    const stringRender = totalRender.toString();
    const render = stringRender.replace(/,/g, "");
    return render;
}

