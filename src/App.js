import React, { useState } from 'react';
import { SpinnerCircularFixed } from 'spinners-react';
import Select from 'react-select';
import Toggle from 'react-toggle';

import check from './assets/img/check.svg';
import key from './assets/img/key.svg';
import Checkbox from './helpers/Checkbox';

function App() {
  const colourOptions = [{ 'value': 'ocean', 'label': 'Ocean', 'color': '#00B8D9', 'isFixed': true }, { 'value': 'blue', 'label': 'Blue', 'color': '#0052CC', 'isDisabled': true }, { 'value': 'purple', 'label': 'Purple', 'color': '#5243AA' }, { 'value': 'red', 'label': 'Red', 'color': '#FF5630', 'isFixed': true }, { 'value': 'orange', 'label': 'Orange', 'color': '#FF8B00' }, { 'value': 'yellow', 'label': 'Yellow', 'color': '#FFC400' }, { 'value': 'green', 'label': 'Green', 'color': '#36B37E' }, { 'value': 'forest', 'label': 'Forest', 'color': '#00875A' }, { 'value': 'slate', 'label': 'Slate', 'color': '#253858' }, { 'value': 'silver', 'label': 'Silver', 'color': '#666666' }];

  function handleOnChangeSearch(event) {
    setSearchValue(event.target.value);
  }

  const [searchValue, setSearchValue] = useState('');

  return <div className='block'>
    <h2 className='left'>Elements de formulaire</h2>
    <h4 className='left'>Select</h4>
    <Select
      className='basic-single'
      classNamePrefix='select'
      classNames={{
        control: (state) => state.isFocused ? 'select active' : 'select',
        menu: () => 'select-list',
        singleValue: () => 'select-value',
        option: (state) => `select-option ${state.isSelected ? 'active' : ''}`,
        indicatorSeparator: () => 'select-separator',
      }}
      defaultValue={colourOptions[0]}
      isSearchable={true}
      name='color'
      noOptionsMessage={() => 'Aucun résultat'}
      options={colourOptions}
      placeholder='Trier par niveau'
    />

    <h4 className='left'>Input</h4>
    <input
      autoFocus
      onChange={handleOnChangeSearch}
      placeholder='Input'
      type='text'
      value={searchValue}
    />
    <input
      autoFocus
      className='left blue'
      onChange={handleOnChangeSearch}
      placeholder='Input blue'
      type='text'
      value={searchValue}
    />
    <input
      autoFocus
      className='left search'
      onChange={handleOnChangeSearch}
      placeholder='Recherche !! MARCHE PAS !!'
      type='text'
      value={searchValue}
    />
    <input
      autoFocus
      className='left blue search'
      onChange={handleOnChangeSearch}
      placeholder='Recherche blue !! MARCHE PAS !!'
      type='text'
      value={searchValue}
    />

    <h4 className='left'>Checkbox</h4>

    <Checkbox
      checked={true}
      label={
        <span>Expire le : </span>
      }
      onChange={() => { }}
    />
    <Checkbox
      checked={false}
      label={
        <span>Expire le : </span>
      }
      onChange={() => { }}
    />

    <h4 className='left'>Toogle</h4>
    <div className='fluent_form block'>
      <Toggle
        checked={true}
        icons={false}
        id='show_trafic'
        onChange={() => { }}
      />
    </div>
    <div className='fluent_form block'>
      <Toggle
        checked={false}
        icons={false}
        id='show_trafic'
        onChange={() => { }}
      />
    </div>

    <h2 className='left'>Bouttons</h2>
    <h4 className='left'>Classic</h4>

    <button className='blue' type='submit'>
      <span >Obtenir le code</span>
    </button>
    <button >
      <img className='svg' src={key} />
      <span >Obtenir le code</span>
    </button>
    <button className='blue' type='submit'>
      <div>
        <SpinnerCircularFixed color='#ffffff' secondaryColor='transparent' size={20} speed={100} thickness={150} />
      </div>
    </button>
    <button className='red' type='submit'>
      <span >Obtenir le code</span>
    </button>
    <button className='green' type='submit'>
      <img className='svg_white' src={key} />
      <span >Obtenir le code</span>
    </button>
    <button className='orange' type='submit'>
      <div>
        <SpinnerCircularFixed color='#ffffff' secondaryColor='transparent' size={20} speed={100} thickness={150} />
      </div>
    </button>

    <h4 className='left'>(with size)</h4>

    <button style={{ width: 120 }}>
      <img alt='Fermer' className='svg' src={key} />
      <span>Fermer</span>
    </button>
    <button style={{ width: 120 }}>
      <span>Fermer</span>
    </button>
    <button className='red' style={{ width: 120 }}>
      <img alt='Fermer' className='svg_white' src={key} />
      <span>Fermer</span>
    </button>
    <button className='blue' style={{ width: 120 }}>
      <img alt='Fermer' className='svg_white' src={key} />
      <span>Fermer</span>
    </button>

    <h4 className='left'>Fluent</h4>

    <button className='fluent_btn is-inline-flex left'>
      <img className='svg' src={key} />
      <span>Ajouter une information</span>
    </button>
    <button className='fluent_btn is-inline-flex right'>
      <img className='svg' src={key} />
      <span>Ajouter une information</span>
    </button>
    <button className='fluent_btn is-inline-flex'>
      <img className='svg' src={key} />
      <span>Ajouter une information</span>
    </button>
    <button className='fluent_btn is-inline-flex left'>
      <SpinnerCircularFixed color='#ffffff' secondaryColor='transparent' size={25} speed={100} thickness={150} />
      <span>Ajouter une information</span>
    </button>
    <button className='fluent_btn is-inline-flex'>
      <SpinnerCircularFixed color='#2674c6' secondaryColor='transparent' size={20} speed={100} thickness={200} />
      <span>Ajouter une information</span>
    </button>
    <button className='blue'>
      <span>
        <img alt='Enregistré avec succès' className='check svg_white' src={check} />
      </span>
    </button>
    <br />
    <h4 className='left'>Mini</h4>

    <a className='mini_btn' href='http://discord.beta.hackernwar.com'>
      <img className='svg' src='https://beta.hackernwar.com/assets/img/discord.svg' />
    </a>
    <a className='mini_btn red' href='http://discord.beta.hackernwar.com'>
      <img className='svg_white' src='https://beta.hackernwar.com/assets/img/discord.svg' />
    </a>
    <a className='mini_btn blue' href='http://discord.beta.hackernwar.com'>
      <img className='svg_white' src='https://beta.hackernwar.com/assets/img/discord.svg' />
    </a>
    <a className='mini_btn green' href='http://discord.beta.hackernwar.com'>
      <img className='svg_white' src='https://beta.hackernwar.com/assets/img/discord.svg' />
    </a>
    <a className='mini_btn orange' href='http://discord.beta.hackernwar.com'>
      <img className='svg_white' src='https://beta.hackernwar.com/assets/img/discord.svg' />
    </a>

    <button className='mini_btn'>
      <img className='svg' src='https://beta.hackernwar.com/assets/img/discord.svg' />
    </button>

    <button className='mini_btn red'>
      <img className='svg_white' src='https://beta.hackernwar.com/assets/img/discord.svg' />
    </button>
    <button className='mini_btn blue'>
      <img className='svg_white' src='https://beta.hackernwar.com/assets/img/discord.svg' />
    </button>
    <button className='mini_btn green'>
      <img className='svg_white' src='https://beta.hackernwar.com/assets/img/discord.svg' />
    </button>
    <button className='mini_btn orange'>
      <img className='svg_white' src='https://beta.hackernwar.com/assets/img/discord.svg' />
    </button>

    <h2 className='left'>Block</h2>
    <h4 className='left'>In-Line</h4>

    <span className='pill green'>
      <img className='svg' src={key} />
      <span>Test</span>
    </span>
    <span className='pill blue'>
      <img className='svg' src={key} />
      <span>Test</span>
    </span>
    <span className='pill blue'>
      <img className='svg' src={key} />
      <span>OULA IL Y A BEACOUP A DIRE ICI <br />OULA IL Y A BEACOUP A DIRE ICI <br />OULA IL Y A BEACOUP A DIRE ICI <br /></span>
    </span>
    <span className='pill orange'>
      <img className='svg' src={key} />
      <span>Test</span>
    </span>
    <span className='pill red'>
      <img className='svg' src={key} />
      <span>Test</span>
    </span>

    <h2 className='left'>Block</h2>
    <h4 className='left'>In-Line</h4>

    <div className='green'>
      <img className='svg' src={key} />
      <span>Test</span>
    </div>
    <div className='blue'>
      <img className='svg' src={key} />
      <span>Test</span>
    </div>
    <div className='blue'>
      <img className='svg' src={key} />
      <span>OULA IL Y A BEACOUP A DIRE ICI <br />OULA IL Y A BEACOUP A DIRE ICI <br />OULA IL Y A BEACOUP A DIRE ICI <br /></span>
    </div>
    <div className='orange'>
      <img className='svg' src={key} />
      <span>Test</span>
    </div>
    <div className='red'>
      <img className='svg' src={key} />
      <span>Test</span>
    </div>

    <h4 className='left'>In-Row</h4>

    <div className='blue is-flex-direction-column is-align-items-start'>
      <u>
        <h3>Oh du texte !</h3>
      </u>
      Ici on met de blabla, trop la flemme de copier / coller un lorem ipsum donc je raconte ma vie :D
    </div>
    <div className='green is-flex-direction-column'>
      <u>
        <h3>Oh du texte !</h3>
      </u>
      Ici on met de blabla, trop la flemme de copier / coller un lorem ipsum donc je raconte ma vie :D
    </div>
  </div>;
}

export default App;
