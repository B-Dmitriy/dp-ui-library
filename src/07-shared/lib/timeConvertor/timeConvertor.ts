class TimeConvertor {
    fromISOToLocal(str: string): string {
        const date = new Date(Date.parse(str));

        return date.toLocaleString();
    }
}

export const timeConvertor = new TimeConvertor();
