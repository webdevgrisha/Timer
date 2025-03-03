import { ComponentStory } from "@storybook/react";
import Timer from "./Timer";
import "./TimerCircle/TimerCircle.css";
import "../../index.css";
import "../../reset.css";
import "./Timer.css";

export default {
  title: "Components/Timer",
  component: Timer,
};

interface TimerArgs {
  title: string;
  endTime: number;
  elapsedTime?: number;
}

const Template: ComponentStory<typeof Timer> = (args: TimerArgs) => <Timer {...args} />;

export const InitTime = Template.bind({});
InitTime.args = {
  title: "Init Timer",
  endTime: 0,
  elapsedTime: 0,
};

export const Default = Template.bind({});
Default.args = {
  title: "Default Timer",
  endTime: 120,
  elapsedTime: 0,
};

export const WithElapsedTime = Template.bind({});
WithElapsedTime.args = {
  title: "My Timer with Elapsed Time",
  endTime: 300,
  elapsedTime: 60,
};

export const EndedTimer = Template.bind({});
EndedTimer.args = {
  title: "Ended Timer",
  endTime: 60,
  elapsedTime: 60,
};

// export const ErrorTimer = Template.bind({});
// ErrorTimer.args = {
//   title: "Error Timer",
//   endTime: 3600,
//   elapsedTime: 60,
// };
