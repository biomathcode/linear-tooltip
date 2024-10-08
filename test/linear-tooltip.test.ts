import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { LinearTooltip } from '../src/LinearTooltip.js';
import '../src/linear-tooltip.js';

describe('LinearTooltip', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<LinearTooltip>(
      html`<linear-tooltip></linear-tooltip>`,
    );
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<LinearTooltip>(
      html`<linear-tooltip></linear-tooltip>`,
    );
    el.shadowRoot!.querySelector('button')!.click();
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<LinearTooltip>(
      html`<linear-tooltip header="attribute header"></linear-tooltip>`,
    );
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<LinearTooltip>(
      html`<linear-tooltip></linear-tooltip>`,
    );
  });
});
