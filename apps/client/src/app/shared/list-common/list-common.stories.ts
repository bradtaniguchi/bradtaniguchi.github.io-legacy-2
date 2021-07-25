import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { OcticonModule } from '../../core/octicon/octicon.module';
import { injectionDecorator } from '../storybook-utils/injection-decorator';
import {
  darkThemeDecorator,
  lightThemeDecorator,
} from '../storybook-utils/theme-decorators';
import { ListCommonConfig } from './list-common-config';
import { LIST_COMMON_CONFIG_INJECTION_TOKEN } from './list-common-config-injection-token';
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
const noSearchDecorator = injectionDecorator([
  {
    provide: LIST_COMMON_CONFIG_INJECTION_TOKEN,
    useValue: {
      hideSearch: false,
    } as ListCommonConfig,
  },
]);
export const DarkModePrimaryNoSearch: Story<ListCommonComponent> = Template.bind(
  {}
);
DarkModePrimaryEmpty.decorators = [
  ...(DarkModePrimaryEmpty.decorators || []),
  darkThemeDecorator,
  noSearchDecorator,
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

export const LightModePrimaryEmptyNoSearch: Story<ListCommonComponent> = Template.bind(
  {}
);
LightModePrimaryEmpty.decorators = [
  ...(LightModePrimaryEmpty.decorators || []),
  lightThemeDecorator,
  noSearchDecorator,
];
LightModePrimaryEmpty.args = {
  title: 'Light mode Primary',
  routeItems: [],
};
