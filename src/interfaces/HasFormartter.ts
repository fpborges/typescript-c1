/**
 * Interface to ensure a class has a format method returning a string.
 * Used for consistent formatting of objects for display.
 */
export interface HasFormatter {
	format(): string; // method that returns a string
}
