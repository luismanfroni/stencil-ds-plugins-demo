/* eslint-disable */
/* tslint:disable */
/* auto-generated vue components */
import 'component-library';
import "reflect-metadata";
import { VNode } from "vue";
import { Vue, Component, Ref, Prop, Model } from 'vue-property-decorator';

@Component
export default class DemoComponent extends Vue {
  @Model("slideChanged") readonly value: string
  @Ref() readonly childWebComponent!: HTMLDemoComponentElement
  @Prop() readonly min: number
  @Prop() readonly max: number
  @Prop() readonly advanced: any
  on_slideChanged(eventValue: any) { this.$emit("slideChanged", eventValue); }
  render (createElement: any): VNode {
    return createElement("demo-component",
      {
        ref: "childWebComponent",
        props: {
          min: this.min,
          max: this.max,
          advanced: this.advanced,
          value: this.value,
        },
        nativeOn: {
          slideChanged: this.on_slideChanged,
        }
      },
      [this.$slots.default]
    );
  }
};
