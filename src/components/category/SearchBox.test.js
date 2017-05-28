import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { SearchBox } from './SearchBox';

describe('<SearchBox />', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    }); 

    afterEach(() => {
        sandbox.restore();
    }); 

    describe('Constructor', () => {
        it('should be constructed accordingly', () => {
            const handleSearchTextStub = sandbox.stub();
            const wrapper = shallow(<SearchBox handleSearchText={handleSearchTextStub} />);
            expect(wrapper.instance().handleSearchChange).toBeDefined(); 
        });
    });

    describe('Event methods', () => {
        it('should handle search submission', () => {
            const handleSearchTextStub = sandbox.stub();
            const mockValue = "FakeCategory";

            const wrapper = shallow(<SearchBox handleSearchText={handleSearchTextStub} />);
            
            wrapper.find('input').simulate('change', {
                target: {
                    value: mockValue
                }
            }); 

            expect(handleSearchTextStub.calledOnce).toBe(true);
            expect(handleSearchTextStub.args[0][0]).toBe(mockValue);
        });
    });

    describe('render methods', () => {
        it('should render accordingly', () => {
            const handleSearchTextStub = sandbox.stub();
            const wrapper = shallow(<SearchBox handleSearchText={handleSearchTextStub} />); 

            expect(wrapper.find('form').length).toBe(1);
            expect(wrapper.find('input').length).toBe(1);
        });
    });
});