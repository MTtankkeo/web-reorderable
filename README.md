> [!WARNING]
> When using, keep in mind that this package is an alpha and development version.

<div align="center">
    <img src="https://github.com/user-attachments/assets/f4197394-88db-4b8b-a7d7-78286eda3bd6">
    <h1>Web Reorderable</h1>
    <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>v0.0.0-dev1</th>
          </tr>
        </tbody>
    </table>
</div>

This package uses web components to implement efficient and simple and flexible, soft reorderable list and grid that is can be animation.

## Usage

```html
<reorderable-list>
  <div key="uuid-1">...</div>
  <div key="uuid-2">...</div>
  <div key="uuid-3">...</div> <!-- ...children -->
</reorderable-list>
```

```html
<reorderable-grid rows="10">
  <div key="uuid-1">...</div>
  <div key="uuid-2">...</div>
  <div key="uuid-3">...</div> <!-- ...children -->
</reorderable-grid>
```

### How to connect reorderable list or grid elements to one another?
You need to be using `<reorderable-connection>` element.

```html
<reorderable-connection>
  <div> <!-- The tree depth doesn't matter. however, always an items key must be unique. -->
    <reorderable-list>...</reorderable-list>
    <reorderable-list>...</reorderable-list>
  </div>
</reorderable-connection>
```
