import "./assets/styles/global.scss";
import { Story } from "@storybook/react/types-6-0";

const StorybookStyleLoader = () => null;

const Template: Story = () => <StorybookStyleLoader />;
export const StorybookStyles = Template.bind({});
