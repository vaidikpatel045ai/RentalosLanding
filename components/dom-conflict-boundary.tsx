"use client";

import { Component, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { remountKey: number };

const DOM_CONFLICT_PATTERN = /insertBefore|removeChild|is not a child of this node/i;

// Browser extensions and features that rewrite page text — translators
// (including Chrome's built-in "Translate this page"), Grammarly,
// password managers — mutate DOM nodes that React doesn't know about.
// When React later needs to update that same node (e.g. a button label
// changing from "Sign in" to "Signing in…"), the live DOM can disagree
// with what React expects and its commit throws a NotFoundError on
// insertBefore/removeChild. That's not an application bug and isn't
// fixable by changing our own render logic — we can't control what's
// installed in a visitor's browser. This boundary catches exactly that
// failure and recovers by remounting the subtree (fresh DOM, so any
// extension-added nodes are gone too), instead of taking down a
// lead-generation form with a hard crash. Anything else still propagates
// to Next's own error boundary as normal.
export class DomConflictBoundary extends Component<Props, State> {
  state: State = { remountKey: 0 };

  componentDidCatch(error: unknown) {
    if (error instanceof Error && DOM_CONFLICT_PATTERN.test(error.message)) {
      this.setState((s) => ({ remountKey: s.remountKey + 1 }));
      return;
    }
    this.setState(() => {
      throw error;
    });
  }

  render() {
    return <div key={this.state.remountKey}>{this.props.children}</div>;
  }
}
