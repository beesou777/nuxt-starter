export async function customError<T, E extends new (message?: string) => Error>(
    promise: Promise<T>,
    errorToCatch?: E[]
): Promise<[undefined, T] | [InstanceType<E>]> {
    try {
        const data = await promise;
        return [undefined, data];
    } catch (error) {
        const errorClasses = errorToCatch ?? [];
        if (errorClasses.some(e => error instanceof e)) {
            return [error as InstanceType<E>];
        }
        throw error;
    }
}
