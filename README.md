# Instructions
Write each test, one at a time. When your test is running and failing for the right reason, copy the production code necessary to make that test pass.

# Test 1
```js
render() {
    return (
        <div>        
            <button>Add</button>
            <ul>
                <li>Pay taxes</li>
            </ul>
        </div>
    );
}
```

# Test 2
```js
render() {
    const listItems = [];
    return (
        <div>
            <input type="text"/>
            <button>Add</button>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}
```

# Test 3
```js
render() {
    const items = this.props.items ?? [];
    const listItems = items.map((item, i) => <li key={i}>{item}</li>);
    return (
        <div>
            <input type="text"/>
            <button>Add</button>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}
```

# Test 4
```js
constructor(props) {
    super(props);
    this.state = {
        items: props.items ?? [],
        currentItem: "",
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
}

onChange(event) {
    this.setState({
        currentItem: event.target.value,
    });
}

onClick(event) {
    const currentItems = this.state.items.slice();
    currentItems.push(this.state.currentItem);
    this.setState({
        items: currentItems
    });
}

render() {
    const listItems = this.state.items.map((item, i) => <li key={i}>{item}</li>);
    return (
        <div>
            <input type="text" value={this.state.currentItem} onChange={this.onChange}/>
            <button onClick={this.onClick}>Add</button>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}
```