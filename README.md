# Select P14

Select personnalisé pour le projet 14 du parcours React d'OC

## Installation

Use the package manager [npm](https://www.npmjs.com/package/select-nico) to install foobar.

```bash
npm i select-nico
```

## Usage

```js
import Select from 'select-nico'

const states = [
    {label: 'Alabama', value: 'AL'},
    {label: 'Colorado', value: 'COL'},
]

<Select 
    options={states}
    onChange={(value) => updateForm('state', value)}
    selected={form.state || states[0]}                    
/>
```
* options: Tableau d'objet de la forme `[{label: "", value: ""}]`
* onChange: Fonction appelée lors du changement d'option. Prend en paramètre la valeur sélectionnée
 * selected: L'objet sélectionné par défaut

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)