import React, { useState } from 'react';
// import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckboxTree from 'react-checkbox-tree';

function CheckboxTeste() {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  const nodes = [
    {
      value: 'mars',
      label: 'Mars',
      children: [
        { value: 'phobos', label: 'Phobos' },
        { value: 'deimos', label: 'Deimos' },
      ],
    },
  ];

  return (
    <div>
      <h1>CheckboxTree</h1>

      <CheckboxTree
        nodes={nodes}
        checked={checked}
        expanded={expanded}
        onCheck={checked => setChecked(checked)}
        onExpand={expanded => setExpanded(expanded)}
      />
      <button onClick={() => console.log(checked)}>Salvar</button>
    </div>
  );
}

export default CheckboxTeste;
