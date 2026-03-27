export const logicFlowDiagram = `flowchart TD
    U[User] -->|click buttons| UI[Calculator UI]
    UI -->|build expression| Expr[Expression state]
    UI -->|press Calculate| API[POST /calculate]
    API -->|validate input| Backend[Flask backend]
    Backend -->|tokenize + parse| Calc[CalculatorService]
    Calc -->|evaluate expression| Result[Numeric result]
    Backend -->|save entry| History[HistoryService]
    Backend -->|return result| UI
    UI -->|display result| Output[Result display]
    UI -->|reload| HistoryList[History panel]
    History -->|GET /history| UI
`;

export const dataFlowDiagram = `flowchart LR
    A[Calculator UI]
    B[Backend API]
    C[CalculatorService]
    D[HistoryService]
    E[Browser state]

    A -->|POST /calculate| B
    B -->|evaluate expression| C
    C -->|return result| B
    B -->|save history| D
    D -->|store entry| D
    B -->|response result| A
    A -->|update display| E
    A -->|GET /history| B
    B -->|return history list| A
    A -->|render history| E
`;
