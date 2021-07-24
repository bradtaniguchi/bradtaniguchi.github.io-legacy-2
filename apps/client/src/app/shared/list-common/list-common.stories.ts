import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { OcticonModule } from '../../core/octicon/octicon.module';
import { darkThemeDecorator, lightThemeDecorator } from '../theme-decorators';
import { ListCommonComponent } from './list-common.component';

export default {
  title: 'ui-elements/ListCommon',
  component: ListCommonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ListCommonComponent],
      imports: [CommonModule, FormsModule, OcticonModule],
    }),
  ],
} as Meta<ListCommonComponent>;

const Template: Story<ListCommonComponent> = (args: ListCommonComponent) => ({
  component: ListCommonComponent,
  props: args,
});

export const DarkModePrimaryEmpty: Story<ListCommonComponent> = Template.bind(
  {}
);
DarkModePrimaryEmpty.decorators = [
  ...(DarkModePrimaryEmpty.decorators || []),
  darkThemeDecorator,
];
DarkModePrimaryEmpty.args = {
  title: 'Dark mode Primary',
  routeItems: [],
};

export const LightModePrimaryEmpty: Story<ListCommonComponent> = Template.bind(
  {}
);
LightModePrimaryEmpty.decorators = [
  ...(LightModePrimaryEmpty.decorators || []),
  lightThemeDecorator,
];
LightModePrimaryEmpty.args = {
  title: 'Light mode Primary',
  routeItems: [],
};
