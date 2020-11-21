export const Smile = () =>
  <i className="fa fa-smile-o smile" aria-hidden="true"></i>

export const Sad = () => <i className="fa fa-frown-o frown" aria-hidden="true"></i>

export const Meh = () => <i className="fa fa-meh-o meh" aria-hidden="true"></i>

const smileyMap = { 
  sad: Sad,
  smile: Smile,
  meh: Meh
}

export const SmileyChoice = ({value, onSmileySelect, smiley}) => {
  const Emoticon = smileyMap[smiley]
  return <div class="emoticon">
    <input id={name} name={name} type="radio" value={value} style={{display: 'none'}} onChange={(e) => onSmileySelect(e.target.value)}></input>
    <label for={name}><Emoticon /></label>
  </div>  
}

const smileyValueMap = {
  sad: -1,
  meh: 0,
  smile: 1
}
const smileys = Object.keys(smileyValueMap)

const defaults = {
  smileys,
  smileyValueMap
}

export const SmileyChoices = ({onSmileySelect, smileyValueMap = defaults.smileyValueMap}) => {
  <ul class="smileys">
    {smileys.map((smiley, _) => {
      const value = smileyValueMap[smiley]
      return <SmileyChoice key={smiley} value={value} smiley={smiley} onSmileySelect={onSmileySelect} />
    })}
  </ul>
}