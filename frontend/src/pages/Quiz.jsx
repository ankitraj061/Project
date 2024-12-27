import React, {useState} from 'react';

function Quiz() {
    
    const [name, setName] = useState('');

  return (
    <div>
        <div>
            <h1>
                What name do you prefer?
            </h1>
        </div>
    </div>
  )
}

export default Quiz