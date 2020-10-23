//import '@testing-library/jest-dom/extend-expect';
//import Enzyme from 'enzyme';
const Adapter=require('enzyme-adapter-react-16');
const {createSerializer}=require('enzyme-to-json');


require('enzyme').configure({ adapter: new Adapter() });
//expect.addSnapshotSerializeAr(createSerializer({mode: 'deep'}));