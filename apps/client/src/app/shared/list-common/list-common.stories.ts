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
import { action } from '@storybook/addon-actions';

import '!style-loader!css-loader!sass-loader!@primer/css/forms/index.scss';
import '!style-loader!css-loader!sass-loader!@primer/css/box/index.scss';
import '!style-loader!css-loader!sass-loader!@primer/css/links/index.scss';

export default {
  title: 'ui-elements/ListCommon',
  component: ListCommonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ListCommonComponent],
      imports: [CommonModule, FormsModule, OcticonModule],
    }),
  ],
  excludeStories: /.*Data$/,
} as Meta<ListCommonComponent>;

const actionsData = {
  searchChange: action('searchChange'),
  selectedTagChange: action('onSelectedTag'),
  sortByChange: action('onSortBy'),
  sortDirChange: action('onSortDir'),
};
const Template: Story<ListCommonComponent> = (args) => ({
  // component: ListCommonComponent,
  props: {
    ...args,
    ...actionsData,
  },
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
      hideSearch: true,
    } as ListCommonConfig,
  },
]);
export const DarkModePrimaryNoSearch: Story<ListCommonComponent> = Template.bind(
  {}
);
DarkModePrimaryNoSearch.decorators = [
  ...(DarkModePrimaryEmpty.decorators || []),
  darkThemeDecorator,
  noSearchDecorator,
];
DarkModePrimaryNoSearch.args = {
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
LightModePrimaryEmptyNoSearch.decorators = [
  ...(LightModePrimaryEmpty.decorators || []),
  lightThemeDecorator,
  noSearchDecorator,
];
LightModePrimaryEmptyNoSearch.args = {
  title: 'Light mode Primary',
  routeItems: [],
};
