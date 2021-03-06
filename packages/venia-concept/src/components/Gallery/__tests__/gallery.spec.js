import { createElement } from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Gallery from '../gallery';

configure({ adapter: new Adapter() });

const classes = { root: 'foo' };
const items = [{ key: 'a' }, { key: 'b' }];

test('renders if `data` is an empty array', () => {
    const wrapper = shallow(<Gallery classes={classes} data={[]} />).dive();

    expect(wrapper.hasClass(classes.root)).toBe(true);
});

test('renders if `data` is an array of objects', () => {
    const wrapper = shallow(<Gallery classes={classes} data={items} />).dive();

    expect(wrapper.hasClass(classes.root)).toBe(true);
});

test('renders GalleryItems with props', () => {
    const wrapper = shallow(<Gallery data={items} />).dive();
    const child = wrapper.find('GalleryItems');
    const props = { items };

    expect(child).toHaveLength(1);
    expect(child.props()).toMatchObject(props);
});
