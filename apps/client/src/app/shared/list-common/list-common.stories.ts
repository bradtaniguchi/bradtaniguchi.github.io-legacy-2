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
import '!style-loader!css-loader!sass-loader!@primer/css/blankslate/index.scss';
import '!style-loader!css-loader!sass-loader!@primer/css/select-menu/index.scss';
import { ScullyTag } from '../../models/scully-tags';
import { ScullyRoute } from '@scullyio/ng-lib';

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
  selectedTagChange: action('selectedTagChange'),
  tagsOpenedChange: action('tagsOpenedChange'),
  sortByChange: action('sortByChange'),
  sortByOpenedChange: action('sortByOpenedChange'),
};

const Template: Story<ListCommonComponent> = (args) => ({
  // component: ListCommonComponent,
  props: {
    ...actionsData,
    ...args,
  },
});
const simpleFeatureFlagDecorator = injectionDecorator([
  {
    provide: LIST_COMMON_CONFIG_INJECTION_TOKEN,
    useValue: {
      hideSearch: true,
      hideSortBy: true,
      hideTagFilter: true,
    } as ListCommonConfig,
  },
]);
const fancyFeatureFlagDecorator = injectionDecorator([
  {
    provide: LIST_COMMON_CONFIG_INJECTION_TOKEN,
    useValue: {
      hideSearch: false,
      hideSortBy: false,
      hideTagFilter: false,
    } as ListCommonConfig,
  },
]);

export const Primary: Story<ListCommonComponent> = Template.bind({});
Primary.args = {
  // set array arguments, as to not break the template
  routeItems: [],
  selectedTags: [],
  availableTags: [ScullyTag('tag-one'), ScullyTag('tag-two')],
  title: 'Card Title',
};

export const SimpleEmptyDarkMode: Story<ListCommonComponent> = Primary.bind({});
SimpleEmptyDarkMode.decorators = [
  ...(Template.decorators || []),
  darkThemeDecorator,
  simpleFeatureFlagDecorator,
];
SimpleEmptyDarkMode.args = {
  ...Primary.args,
};

export const FancyEmptyDarkMode: Story<ListCommonComponent> = Primary.bind({});
FancyEmptyDarkMode.decorators = [
  ...(Template.decorators || []),
  darkThemeDecorator,
  fancyFeatureFlagDecorator,
];
FancyEmptyDarkMode.args = {
  ...Primary.args,
};

export const FancyFilledDarkMode: Story<ListCommonComponent> = Primary.bind({});
FancyFilledDarkMode.decorators = [
  ...(Template.decorators || []),
  darkThemeDecorator,
  fancyFeatureFlagDecorator,
];
FancyFilledDarkMode.args = {
  ...Primary.args,
  routeItems: [
    {
      route: '/myRoute1',
      title: 'My Post',
      date: new Date(),
      // these are optionally added, and used
      description: 'My description',
    },
    {
      route: '/myRoute2',
      title: 'My Post2 ',
      date: new Date(),
      // these are optionally added, and used
      description: 'My description 2',
    },
    {
      route: '/myRoute3',
      title: 'My Post With Extra long Title',
      date: new Date(),
      // these are optionally added, and used
      description:
        'My description that is extra long to test out responsivnesss and wrapping.' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula neque mi. Vivamus finibus blandit arcu sit amet maximus. Nulla facilisi. Donec fermentum aliquam justo in fringilla. Nam tellus erat, aliquam nec elit vitae, volutpat porta enim. Etiam elementum ullamcorper interdum. Duis non mauris dolor.',
    },
  ],
};

// LIGHT MODE WIDGETS

export const SimpleEmptyLightMode: Story<ListCommonComponent> = Primary.bind(
  {}
);
SimpleEmptyLightMode.decorators = [
  ...(Template.decorators || []),
  lightThemeDecorator,
  simpleFeatureFlagDecorator,
];
SimpleEmptyLightMode.args = {
  ...Primary.args,
};

export const FancyEmptyLightMode: Story<ListCommonComponent> = Primary.bind({});
FancyEmptyLightMode.decorators = [
  ...(Template.decorators || []),
  lightThemeDecorator,
  fancyFeatureFlagDecorator,
];
FancyEmptyLightMode.args = {
  ...Primary.args,
};

// TODO: ADD DARK_DIMMED widgets
