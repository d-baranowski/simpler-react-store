import React from 'react';
import store from './CatPicturesStore'
import connect from './connect';

const onChange = (event) => {
  store.title = event.target.value
};
const ComponentOne = connect(store, ({title}) => (
    <div>
      <h2>Hello Form Component One</h2>
      <div>{title}</div>
      <input type="text" value={title}
             onChange={onChange}/>
    </div>
));

const ComponentTwo = connect(store, ({title}) => (
    <div>
      <h2>Hello Form Component Two</h2>
      <div>{title}</div>
      <input type="text" value={title}
             onChange={onChange}/>
    </div>
));

const ComponentThree = connect(store, ({fetchKitten}) => (
    <div>
      <h2>Hello Form Component Three</h2>
      <button onClick={fetchKitten}>Press for Kitten</button>
    </div>
));

const ComponentFour = connect(store, ({loading, kitten, error}) => (
    <div>
      <h2>Hello Form Component Four</h2>
      <img style={{width: 300}} src={kitten} />
      {loading && <div>Loading a kitten</div>}
      {error && <div>Omg there was an error {error}</div>}
    </div>
));


const App = () => (
    <div>
      <ComponentOne/>
      <ComponentTwo/>
      <ComponentThree/>
      <ComponentFour />
    </div>
);

export default App;
