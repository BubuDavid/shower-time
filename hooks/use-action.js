import { useState, useCallback } from "react"

export function useAction(action, options = {}) {
  const [error, setError] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(undefined)

  const execute = useCallback(
    async (input) => {
      setIsLoading(true)

      try {
        const result = await action(input)

        if (!result) return

        setFieldErrors(result.fieldErrors)

        if (result.fieldErrors) {
          setError("Error en los campos" + JSON.stringify(result.fieldErrors))
          options.onError?.(result.error)
        }

        if (result.error) {
          setError(result.error)
          options.onError?.(result.error)
        }

        if (result.data) {
          setData(result.data)
          options.onSuccess?.(result.data)
        }
      } finally {
        setIsLoading(false)
        options.onComplete?.()
      }
    },
    [action, options],
  )

  return {
    fieldErrors,
    error,
    isLoading,
    data,
    execute,
  }
}
