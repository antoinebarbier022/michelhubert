import { ComponentStory } from '@storybook/react';
import Card from '../Card/Card.component';
import Footer from './Footer.component';

export default {
    title: 'Components/Footer',
    component: Footer
};

const Template: ComponentStory<typeof Footer> = (args) => <Card><Footer {...args}  /></Card>;


export const Default = Template.bind({});



